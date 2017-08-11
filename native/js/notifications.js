/**
// file:	native\js\Notifications.js
//
// summary:	App.messenger class
**/

/**
 * <summary>Notifiers.
 * </summary>
 * 
 * <param name="header"> The header.</param>
 * <param name="message">The message.</param>
 *
**/
export default function Notifier(header, message) {
    this.header = header;
    this.message = message;
}

/**
 * <summary>Pushes an object onto this stack.
 * </summary>
 *
**/
Notifier.prototype.Push = function () {
    new Notification(this.header, {
        body: this.message
    });
}

