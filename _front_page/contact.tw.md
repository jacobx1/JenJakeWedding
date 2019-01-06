---
heading: 聯繫我們
background: img/j_stockton_20150729_9048.jpg
position: 100
target: contact
draft: false
lang: tw
---

<form class="pure-form pure-g" netlify-honeypot="bot-field" data-netlify="true" name="wedding-contact">
    <p class="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field"></label>
    </p>
    <fieldset  class="pure-u-1">
        <div class="pure-control-group">
            <label for="name" class="pure-u-1">名稱</label>
            <input id="name" type="text" placeholder="Your Name" name="Name" class="pure-u-1">
        </div>

        <div class="pure-control-group">
            <label for="email" class="pure-u-1">電子郵件地址</label>
            <input id="email" type="email" placeholder="name@example.com" name="Email" class="pure-u-1">
        </div>

        <div class="pure-control-group">
            <label for="foo" class="pure-u-1">信息</label>
            <textarea placeholder="Leave a message after the..." name="Message" style="height: 10em; resize: none" class="pure-u-1"></textarea>
        </div>
        <div data-netlify-recaptcha></div>
        <div class="pure-controls">
            <button type="submit" class="pure-button pure-button-primary">提交</button>
        </div>
    </fieldset>

</form>
