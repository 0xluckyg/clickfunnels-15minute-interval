<script>

  function convertMinutes(now) {
    if (now < 15) { return 15 }
    else if (now < 30) { return 30 }
    else if (now < 45) { return 45 }
    else { return 60 }
  }
  function convertSeconds(now) {
    now = now.split(":")
	seconds = Number(now[0]) * 60 + Number(now[1])
    console.log('seconds?',seconds)
    if (seconds < 900) { return 900 - seconds }
    else if (seconds < 1800) {return 1800 - seconds }
    else if (seconds < 2700) {return 2700 - seconds }
    else {return 3600 - seconds}
  }

$(document).on("ready", function(){
 // change to todays date:
 //$(".topHour_date").text( "(TODAY) " + moment().format('dddd MMMM Do'));
 $(".topHour_date").text("TODAY ");
 // change next house
$time_now = moment().format("mm");
$webinarTimeDisplay = moment().startOf('hour').add(convertMinutes($time_now), 'minutes').format('H:mm A')
console.log('webinarTimeDisplay = ', $webinarTimeDisplay)
$(".topHour_time").text($webinarTimeDisplay);
$time_now_seconds = moment().format("mm:ss");
  console.log('tns',$time_now_seconds)
  console.log('tn',$time_now)
  console.log('cs',convertSeconds($time_now_seconds))
$time_left_in_seconds = convertSeconds($time_now_seconds)
$formatted_time_left = moment.utc($time_left_in_seconds*1000).format('mm:ss');
  console.log('formated',$formatted_time_left);
// $time_now_difference = convertMinutes($time_now) - $time_now;
// $time_now_diff_seconds = $time_now_difference * 60;
$.countdown.setDefaults($.countdown.regionalOptions["eng"]);
$(".elCountdownEvergreen").countdown({
 until: $time_left_in_seconds,
 padZeroes: true 
 });
// set value of webinar
webinar_datetime = moment().startOf('hour').add(convertMinutes($time_now), 'minutes');
console.log('webinar_datetime = ', webinar_datetime);
now = moment();
console.log('now = ', now);
now_offset = moment.unix(now);
console.log('now_offset = ', now_offset);
webinar_delay = webinar_datetime.diff(now);
console.log('webinar_delay = ', webinar_delay);
$("#webinar_delay").attr("value", webinar_delay);
 // set value of webinar
$("body").on('click','a[href="#submit-form"]', function(){
 webinar_datetime = moment().startOf('hour').add(convertMinutes($time_now), 'minutes');
 console.log('webinar_datetime on click = ', webinar_datetime);
 now = moment();
 console.log('now on click = ', now);
 now_offset = moment.unix(now);
 console.log('now_offset on click = ', now_offset);
 webinar_delay = webinar_datetime.diff(now);
 console.log('webinar_delay on click = ',webinar_delay);
 $("#webinar_delay").attr("value", webinar_delay);
});
});
</script>