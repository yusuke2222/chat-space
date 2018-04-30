$(function(){
function buildHTML(message) {
  var html = `<div class="chat-main__body">
                <div class="chat-main__body-message__list">
                  <div class="chat-main__body-message">
                    <div class="chat-main__body-message__name">
                      ${message.user_name}
                    </div>
                    <div class="chat-main__body-message__time">
                      ${message.time}
                    </div>
                    <div class="chat-main__body-message__comment">
                      ${message.content}
                    </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this)
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data);
      var html = buildHTML(data);
      $('.chat-main__body-message').append(html);
      $('#message_image').val('');
      $('.form__message').val('');
      $('.chat-main__body').animate({scrollTop: $('.chat-main__body')[0].scrollHeight}, 'swing');
      $('.form__submit').prop("disabled", false)
      })
      .fail(function(){
        alert('error');
      })
    })
});
return false
});





// $(function(){
//   function buildHTML(message){
//     var img = "";
//     if (message.image){
//       img = `<img src=${message.image} class: 'lower-message__image'>`
//     }
//     var html = `<div class="message">
//                   <ul class="upper-message">
//                     <li class="upper-message__user_name">
//                       ${message.user_name}
//                     </li>
//                     <li class="upper-message__date">
//                       ${message.time }
//                     </li>
//                   </ul>
//                   <ul class="lower-message">
//                       <li class="lower-message__content">
//                         ${ message.content }
//                       </li>
//                       ${ img }
//                   </ul>
//                 </div>`
//     return html;
//   }
//   $('#new_message').on('submit', function(e){
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(data){
//       console.log(data)
//       var html = buildHTML(data);
//       $('.messages').append(html)
//       $('.form__message').val('')
//       $('.messages.js-messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fast')
//       $('.form__submit').prop("disabled", false)
//     })
//     .fail(function(){
//       alert('error');
//     })
//   })
// });


// $(document).on('turbolinks:load', function(){
// $(function(){
//   function buildHTML(message) {
//     if (message.image) {
//       var image = `<img src=${message.image}>`;
//       console.log(data.image);
//     } else {
//       var image = "";
//     }
//     var html = `<div class="chat-main__body-message__name">
//                     ${message.user_name}
//                   </div>
//                   <div class="chat-main__body-message__time">
//                     ${message.time}
//                   </div>
//                   <div class="chat-main__body-message__comment">
//                     ${message.content}
//                   </div>
//                     ${img}
//                 </div>`
//     return html;
//   }
//   $('#new_message').on('submit', function(e){
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(data){
//       console.log(data.image)
//       var html = buildHTML(data);
//       $('.chat-main__body-message').append(html);
//       $('#message_image').val('');
//       $('.form__message').val('');
//       $('.chat__main__body').animate({scrollTop: $('.chat__main__body')[0].scrollHeight},'fast')
//       $('.form__submit').prop("disabled", false)
//     })
//     .fail(function(){
//       alert('error');
//     })
//   })
// });
// return false
// });

//     .done(function(data){
//       console.log(data.image);
//       var html = buildHTML(data);
//       $('.chat__main__body__message').append(html);
//       $('#message_image').val('');
//       $('.form__message').val('');
//       $('.chat__main__body').animate({scrollTop: $('.chat__main__body')[0].scrollHeight}, 'swing');
//       $('.form__submit').prop("disabled", false)
//     })
//     .fail(function(){
//       alert('error');
//     })
//   })
// });
// return false
// });

//   })
// })
