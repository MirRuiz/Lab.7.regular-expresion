const pattern = /^<img src=(".{2,}\.(png|jpg)"\/>$)/
const values = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'

console.log(pattern.exec(values));