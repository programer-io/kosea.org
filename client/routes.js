/********************************************
* route
*********************************************/

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("fullLayout", {content: "index"});
  }
});
