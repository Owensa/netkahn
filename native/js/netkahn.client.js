/**
// file:	native\js\netkahn.client.js
//
// summary:	Netkahn.client class
**/
import Notifier from './notifications';
import NetkahnClientManager from './netkahn.server.hook';

/**
 * <summary>Gets the client.
 * </summary>
 *
 * <remarks>Andrew Owens, 8/11/2017.
 * </remarks>
 *
 * <returns>A function.
 * </returns>
**/

export default function Client() {}; 

/**
 * <summary>Constructors.
 * </summary>
 *
 * <remarks>Andrew Owens, 8/11/2017.
 * </remarks>
 *
 * <param name="username">The username.</param>
 * <param name="password">The password.</param>
 *
 * <returns>.
 * </returns>
**/
Client.prototype.constructor = function(username, password) { 
    this.username = username;
    this.password = password; 
    this.netkahn_connection = "null";
    this.notifier = new Notifier();
}

// #region Client Netkagn Server Connection functions
// 
Client.prototype.GetNetkahnConnection = function() { 
    this.netkahn_connection = new NetkahnClientManager(); 
    return netkahn_connection; 
}

// #region Client Message Transport functions 
/**
 * <summary>Sends a message.
 * </summary>
 *
 * <remarks>Andrew Owens, 8/11/2017.
 * </remarks>
 *
 * <param name="message"> The message.</param>
 * <param name="sender">  The sender.</param>
 * <param name="reciever">The reciever.</param>
 *
 * <returns>.
 * </returns>
**/
Client.prototype.SendMessage = function (message, sender, reciever, conn) { 
    this.message = message;
    this.sender = sender;
    this.reciever = reciever; 
    this.conn = conn; 
    
    //create a message by initing a notifier object and passing it the sender and the message and the reciever. 
    const send = function(message) { 
        if(message === null) {
            var error = function(message) { 
                console.log("there was an issue with message. had value: " + message);
                notifier.Push();
            }
            return error;
        } 
        var _message = message;
        var _conn = this.conn; 
        var _notifier = new Notifier(this.message, this.sender);
        
        //send notification
        _notifier.Push();

        //send to netkahn
        _conn.sendSocket();

        //lets update to whats on the server
        _conn.updateInfo(); 
    }
}
// #endregion
export default Client; 
