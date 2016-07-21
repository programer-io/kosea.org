Template.index.onRendered(function() {

  jQuery('.tp-banner').show().revolution({
    delay: 9000,
    startwidth: 1170,
    startheight: 600,
    navigationType: "bullet",
    navigationStyle: "square",
    hideBulletsOnMobile: "on",
    hideArrowsOnMobile: "on",
    shadow: 0,
    fullWidth: "on",
  });

  $("#slider_home").carouFredSel({
    width: "100%",
    height: "auto",
    responsive: true,
    auto: false,
    items: {
      width: 280,
      visible: {
        min: 1,
        max: 3
      }
    },
    swipe: {
      onTouch: true,
      onMouse: true
    },
    scroll: {
      items: 1,
    },
    prev: {
      button: "#sl-prev",
      key: "left"
    },
    next: {
      button: "#sl-next",
      key: "right"
    }
  });
});
