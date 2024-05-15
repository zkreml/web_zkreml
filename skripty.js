function showContent(type) {
    var content = document.getElementById('dynamic-content');
    content.innerHTML = ''; // Clear previous content

    if (type === 'social') {
        content.innerHTML = '<a href="https://mastodon.arch-linux.cz" class="flex-item">Mastodon</a>'
                          + '<a href="https://pixelfed.cz" class="flex-item">Pixelfed</a>'
                          + '<a href="https://twitter.com" class="flex-item">Twitter</a>'
                          + '<a href="https://facebook.com" class="flex-item">Facebook</a>';
    } else if (type === 'opensource') {
        content.innerHTML = '<a href="https://git.arch-linux.cz/Archos" class="flex-item">Gitea</a>'
                          + '<a href="https://arch-linux.cz" class="flex-item">Web Arch Linux</a>';
    } else if (type === 'contact') {
        content.innerHTML = '<a href="https://matrix.org" class="flex-item">Matrix</a>'
                          + '<a href="mailto:email@example.com" class="flex-item">Email</a>'
                          + '<a href="https://xmpp.org" class="flex-item">XMPP</a>';
    }
}
