$(function () {
  // 动态生成轮播图结构
  // console.log(111)
  banner()
  //  nav()
  goodsList()
})

function banner() {
  $.ajax({
    type: 'get',
    url: 'http://157.122.54.189:9094/api/public/v1/home/swiperdata',
    dataType: 'json',
    success: function (result) {
      // console.log(result)
      if (result.meta.status == 200) {
        var html = template('pyg_bannerTemp', result)
        // console.log(html)
        $('.pyg_indexbanner').html(html)
        var indiHtml = template('pyg_indicatorTemp', result)
        $('.mui-slider-indicator').html(indiHtml)
        mui('.mui-slider').slider({
          interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
        });
      }

    }
  })
}

function nav() {
  $.ajax({
    type: 'get',
    url: 'http://157.122.54.189:9094/api/public/v1/home/catitems',
    dataType: 'json',
    success: function (result) {
      // console.log(result)
      // var html
    }

  })
}

function goodsList(){
  $.ajax({
    type:'get',
    url: 'http://157.122.54.189:9094/api/public/v1/home/goodslist',
    dataType:'json',
    success:function (result){
      console.log(result)
      var html = template('prolistTemp',result)
      $('.pyg_goodsList').html(html)
    }
  })
}