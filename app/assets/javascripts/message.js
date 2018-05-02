$(function(){
  function buildHTML(message) {
    message.image ? image = `<img src=${message.image}>` : image = "";
    var html = `<div class="chat-main__body-message-item">
                    <div class="chat-main__body-message__name">
                      ${message.user_name}
                    </div>
                    <div class="chat-main__body-message__time">
                      ${message.time}
                    </div>
                    <div class="chat-main__body-message__comment">
                       <p class="lower-message__content">
                        ${message.content}
                       </p>
                    ${image}
                    </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
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
      var html = buildHTML(data);
      $('.chat-main__body-message').append(html);
      $('#message_image').val('');
      $('.form__message').val('');
      $('.chat-main__body').animate({scrollTop: $('.chat-main__body-message').height()}, 'fast')
      $('.form__submit').prop("disabled", false);
      })
      .fail(function(){
        alert('error');
      })
    })
});
