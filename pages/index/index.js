const wxml2canvas = require('../../utils/wxml2canvas.js')

Page({
  data: {
  },

  drawCanvas: function() {
    const wrapperId = '#wrapper'
    const drawClassName = '.draw'
    const canvasId = 'canvas-map'
    
    wxml2canvas(wrapperId, drawClassName, canvasId).then(() => {
      // canvas has been drawn
      // can save the image with wx.canvasToTempFilePath and wx.saveImageToPhotosAlbum 
    })
  }
})
