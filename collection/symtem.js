/********************************************
* schema
*********************************************



*********************************************/
System = new Mongo.Collection('system');


if(Meteor.isServer) {
  Meteor.publish('system', () => {
    return System.find()
  })
}

if(Meteor.isServer) {
  System.allow({
    insert() { return true },
    update() { return true },
    remove() { return true }
  })
}
