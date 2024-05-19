function showContent(type) {
    var content = document.getElementById('dynamic-content');
    content.innerHTML = ''; // Clear previous content

    if (type === 'social') {
        content.innerHTML = '<a href="https://mastodon.arch-linux.cz/@archos" class="flex-item"><i class="fab fa-mastodon"></i> Mastodon</a>'
                          + '<a href="https://pixelfed.cz/i/web/profile/441194050239729665" class="flex-item"><i class="fab fa-instagram"></i> Pixelfed</a>'
                          + '<a href="https://twitter.com/archos_linux" class="flex-item"><i class="fab fa-twitter"></i> Twitter</a>'
                          + '<a href="https://www.facebook.com/zdendys75/" class="flex-item"><i class="fab fa-facebook-f"></i> Facebook</a>';
    } else if (type === 'opensource') {
        content.innerHTML = '<a href="https://git.arch-linux.cz/Archos" class="flex-item"><i class="fas fa-code-branch"></i> Gitea</a>'
                          + '<a href="https://arch-linux.cz" class="flex-item"><i class="fab fa-linux"></i> Web Arch Linux</a>';
    } else if (type === 'contact') {
        content.innerHTML = '<a href="https://matrix.to/#/@archos:mxchat.cz" class="flex-item"><i class="fas fa-comments"></i> Matrix</a>'
                          + '<a href="mailto:email@zkreml.cz" class="flex-item"><i class="fas fa-envelope"></i> Email</a>'
                          + '<a href="xmpp:archos@arch-linux.cz" class="flex-item"><i class="fas fa-comment-dots"></i> XMPP</a>';
    }
}
