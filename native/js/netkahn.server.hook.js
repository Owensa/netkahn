/**
// file:	native\js\netkahn.server.hook.js
//
// summary:	Netkahn.server.hook class
**/

import Netkahn from 'netkahn_2017.1/public/js/chat';

/**
 * <summary>Netkahn client manager.
 * </summary>
 *
 * <remarks>Andrew Owens, 8/11/2017.
 * </remarks>
 *
 * <returns>.
 * </returns>
**/
function NetkahnClientManager() {
    this.username = "unregistered user";
    this.password = "null";
}

/**
 * <summary>Constructors this object.
 * </summary>
 *
 * <remarks>Andrew Owens, 8/11/2017.
 * </remarks>
 *
 * <returns>.
 * </returns>
**/

NetkahnClientManager.prototype.constructor = function() { 
    this.nk_conn = Netkahn.connect(); 
    return this.nk_conn; 
}

/**
 * <summary>Sends a message to netkahn.
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
NetkahnClientManager.prototype.GetMessageFromNetkahn = function(sender, reciever) { 
    this.sender = sender;
    this.reciever = reciever;
    this.message = "null";

    this.nk_conn.onmessage = function(message) { 
        var data = JSON.parse(message.data);
        this.message = data;

        if (dev) {
            console.log(data);
        }    
    }
    return message;
}
export default NetkahnClientManager; 

