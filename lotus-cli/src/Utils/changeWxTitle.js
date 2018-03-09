export default function(title){
    let body = document.getElementsByTagName('body')[0];
    document.title = title;
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", "./favicon.ico");
    iframe.style.display = 'none';
    iframe.addEventListener('load', function() {
        setTimeout(function() {
            iframe.removeEventListener('load',null,false);
            document.body.removeChild(iframe);
        }, 0);
    });
    document.body.appendChild(iframe);
}