/*
 * @Author: hentaitabako
 * @Date: 2020-01-06 08:02:01
 * @LastEditTime : 2020-02-09 21:48:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /SpeedUpExt/app.js
 */
$(function() 
{
  const speed_up_inner_html = `
  <div>
    <span>1</span>
      <input type='range' min='1' max='5' step='0.5' value="1"/>
    <span>5</span>
  </div>
  `
  // 又不是不能用
  setTimeout(() => {
    $('#playerWrap').after(speed_up_inner_html);
    $("[type='range']").on('change', (e)=> {
      const play_back_rate = e.target.value;
      $('video').prop('playbackRate', play_back_rate)
      console.log(e.target.value);
    })
  }, 5000);

});