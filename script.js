let username='';

document.getElementById('join-btn').addEventListener('click', (event) =>{
    event.preventDefault();
    username = document.getElementById('user-input').value;
    if(username.trim()!==''){
        document.querySelector('.chat-room').style.display='none';
        document.querySelector('.chat-container').style.display='block';
    }
});