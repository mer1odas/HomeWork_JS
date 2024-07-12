let all_li = document.querySelectorAll('li')

function func(obj) {
    if (obj.lenght == 0) {
        return 
    }

    for (let i of obj) {
        let text = i.firstChild.data
        if (i.querySelectorAll('li').length != 0) {
            // console.log(">>>>>>" + text + i.querySelectorAll('li').length);
            i.firstChild.data = text + i.querySelectorAll('li').length
        }
    }
}

func(all_li)