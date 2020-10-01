/* eslint-disable indent */
import React, { useContext, useState, useEffect, createContext } from 'react';
// import socketIO from "socket.io-client";
import { connect } from 'react-redux';
// import carIcon from '';
import { Socket } from '../Context/socketContext';

export const ChatSocket = createContext();




const ChatContext = (props) => {

    const [socket] = React.useContext(Socket);
    const [array, setArray] = useState([]);
    const [chatOpen, setChatOpen] = useState(false);
    const [newMsg, setNewMsg] = useState(false);
    // console.log(messageArray)
    // console.log(array)





    // React.useEffect(() => {
    //     // messageSending: Emit event for sending messages
    //     //   markAsRead : Emit event to mark message as read
    //     //   messageReceiverKey : To receive message
    //     // socket.emit('messageSending', { jobId: global.jobDetail.jobId, body: });
    //     console.log(messageArray)
    //     console.log(array);

    //     setMessageArray(array);
    //     console.log(messageArray)
    //     return () => {
    //         // THIS IS THE IMPORTANT CHANGE
    //         socket.removeListener('messageReceiverKey');
    //     }
    // }, [array])



    React.useEffect(() => {
        //   messageSending: Emit event for sending messages
        //   markAsRead : Emit event to mark message as read
        //   messageReceiverKey : To receive message

        if (socket) {
            // console.log("--------message listen-------------")
            socket.on('messageReceiverKey', (data) => {
                // console.log('====================================');
                // console.log(data);
                // console.log('====================================');

                const { socket: { resource } } = data;
                setArray(array.concat(data.socket.resource));
                if (chatOpen && (data.socket.resource.senderId != data.socket.resource.userAccountId)) {
                    // console.log('if is called', data);
                    socket.emit('markAsRead', { messageId: data.socket.resource._id })
                    setNewMsg(newMsg => newMsg = false);
                }
                if (!chatOpen) {
                    // console.log("chat is false")
                    setNewMsg(newMsg => newMsg = true);
                }

            })
        }
        return () => {
            // console.log("--------Remove Listenre-------------")
            if (socket) {
                socket.removeListener('messageSending');
                socket.removeListener('messageReceiverKey');
            }
        }

    }, [array, socket])



    const messageSending = (jId, message) => {

        socket.emit('messageSending', { jobId: jId, body: message }, (res) => {
            console.log(res);
            setArray(array.concat(res.resource));
            setChatOpen(chatOpen => chatOpen = true);
        });

    }



    return (

        <ChatSocket.Provider value={[array, setArray, messageSending, chatOpen, setChatOpen, newMsg, setNewMsg]}>
            {props.children}
        </ChatSocket.Provider>


    );
}
// const mapStateToProps = state => {
//     // console.log(state);
//     return state;
// };
// export default connect(mapStateToProps)(SocketContext);
export default ChatContext;