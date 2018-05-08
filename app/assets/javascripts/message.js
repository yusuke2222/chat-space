$(function(){
  function buildHTML(message) {
    message.image ? image = `<img src=${ message.image }>` : image = "";
    var html = `<div class="chat-main__body-message-item" msg-id = ${ message.id }>
                    <div class="chat-main__body-message__name">
                      ${ message.user_name }
                    </div>
                    <div class="chat-main__body-message__time">
                      ${ message.time }
                    </div>
                    <div class="chat-main__body-message__comment">
                       <p class="lower-message__content">
                        ${ message.content }
                       </p>
                    ${ image }
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
      $('.chat-main__body').animate({ scrollTop: $('.chat-main__body-message').height() }, 'fast')
      $('.form__submit').prop("disabled", false);
      })
      .fail(function(){
        alert('error');
      })
    });
  function getMsg() {
      var newMsgId = $('.chat-main__body-message-item').last().attr('msg-id');
      var url = $('#new_message').attr('action');
      if (window.location.href.match(/\/groups\/\d+\/messages/)){
        $.ajax ({
          type: 'GET',
          url: url,
          data: { id: newMsgId },
          dataType: 'json'
        })
        .done(function(data){
          if (data.length == 0) return false
          data.forEach(function(msg) {
            var html = buildHTML(msg);
            $('.chat-main__body-message__list').append(html);
          });
          $('.chat-main__body').animate({ scrollTop: $('.chat-main__body')[0].scrollHeight });
        });
      }
    }
    setInterval(getMsg, 1000);
});
