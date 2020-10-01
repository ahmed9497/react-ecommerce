/* eslint-disable no-undef */
/* eslint-disable no-lonely-if */
/* eslint-disable prefer-const */
/* eslint-disable indent */
import React, { useContext, useState, useEffect, createContext } from 'react';
import socketIO from "socket.io-client";

export const Socket = createContext();

const SocketContext = (props) => {

    const [socket, setSocket] = useState(null);
    const [notifications, setNotifications] = useState([]);
    const [notificationCount, setNotificationCount] = useState(0);

    useEffect(() => {

        if (socket) {
           
            socket.on('notificationReceived', (data) => {              
                // console.log(data);
                const newItem = data.socket.resource.symptomResultResponse?.notificationData;    
                setNotificationCount(data.socket.resource.symptomResultResponse?.unReadCount);
                const temp = [newItem,...notifications];
               
                setNotifications(temp);
                // setNotifications(notifications.concat(data.socket.resource.socketDataResponse.notificationData));



            });

        }
        return () => {
            // console.log("--------Remove Listenre-------------")
            if (socket) {
                socket.removeListener('notificationReceived');

            }
        }


    }, [notifications, socket])

    const connection = () => {

        if (!socket?.connected) {

            // console.log('**************************************************');
            const socketConnection = socketIO('https://medicalapi.dockcloud.net');
            // const socketConnection = socketIO('http://54.71.30.131:3000');

            socketConnection.on('connect', () => {
                // console.log('**************************************************');
                // console.log('**************************************************');
                // console.log('************** Socket Connection *****************');
                // console.log('**************************************************');
                // console.log('**************************************************');

                setSocket(socketConnection);

            });
            // console.log('**************************************************');





        }
    }

    const emitNotifications = (id) => {
        if(socket){
        // console.log('this ihs ihemitter ; '+id);
        socket.emit('readNotificationEvent',{notificationId:id},(data)=>{
            // console.log('---------------ack',data);
        });
        

        }
    }

    const removeListeners =()=>{
        if (socket){
            // console.log('====================================');
            // console.log('Removed Listener');
            // console.log('====================================');
            socket.disconnect();
            // socket.removeListener('notificationReceived');
        }
    }



    return (

        <Socket.Provider
            value={{ socket, connection, notifications, setNotifications, emitNotifications,notificationCount, setNotificationCount, removeListeners}} >
            {props.children}
        </Socket.Provider>


    );
}

export default SocketContext;





