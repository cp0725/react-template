const waterMark = (waterMarkStr) => {
  let $waterMark = document.querySelector('#mc_waterMark')
  if (waterMarkStr && $waterMark && window['__punch']) {
    window.__punch.to($waterMark, waterMarkStr, {
      width: 250,	       //水印单元宽度
      height: 120,	     //水印单元高度
      bg: 'transparent', //水印背景
      bgAlpha: 0,		     //水印背景透明度
      color: '#aaa',	   //水印字体颜色
      alpha: 0.2,	       //水印字体颜色透明度
      font: '13px Arial' //水印字体
    })
  }
}
export default waterMark