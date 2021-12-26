// mobile menu / главное бургер меню

let openMenu = function() {
    let headerNav = document.querySelector('.header-nav')
    headerNav.classList.contains('active') ?
        headerNav.classList.remove('active') :
        headerNav.classList.add('active')
}

// tabs-mobile / табы в новостях

let showHideTabs = function() {
    let tabs = document.querySelector('.news-tabs')
    tabs.classList.contains('active') ?
        tabs.classList.remove('active') :
        tabs.classList.add('active')
}

// news tabs 

let newTab = document.querySelectorAll('.newTab-element')
let newElemen = document.querySelectorAll('.news-element')

newTab.forEach(function(el) {
    el.onclick = function() {
        let dataVal = this.dataset.type

        newTab.forEach(function(el) {
            el.classList.remove('active')
        })

        this.classList.add('active')

        newElemen.forEach(function(el) {
            if (el.dataset.type == dataVal || dataVal == 'all') {
                el.style.display = 'block'
            } else {
                el.style.display = 'none'
            }
        })
    }
})

// shop page checkboxes

let shopInputs = document.querySelectorAll('.watch-label input')

shopInputs.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.stopPropagation()
        let types = []
        let dates = []
        document.querySelectorAll('.type-input').forEach(function(type) {
            if (type.checked) {
                types.push(type.value)
            }
        })
        document.querySelectorAll('.date-input').forEach(function(date) {
            if (date.checked) {
                dates.push(date.value)
            }
        })
        document.querySelectorAll('.watch-item').forEach(function(el) {
            let elDate = el.dataset.year
            let elType = el.dataset.type
            if (parseInt(elDate) >= 2013 && parseInt(elDate) <= 2017) {
                elDate = '2013-2017'
            } else if (parseInt(elDate) >= 2018 && parseInt(elDate) <= 2019) {
                elDate = '2018-2019'
            } else if (parseInt(elDate) >= 2000 && parseInt(elDate) <= 2012) {
                elDate = '2000-2012'
            } else if (parseInt(elDate) < 2000 && parseInt(elDate) >= 1990) {
                elDate = '1990'
            } else if (parseInt(elDate) < 1990 && parseInt(elDate) >= 1980) {
                elDate = '1980'
            } else if (parseInt(elDate) < 1980) {
                elDate = 'all'
            }

            if (((types.includes(elType) || types.length == 0) && (dates.includes(elDate) || dates.length == 0 || elDate == 'all'))) {
                el.style.display = 'block'
            } else {
                el.style.display = 'none'
            }
        })
    })
})

// show hide tabs on mobile watch / табы на странице "смотреть"


let dotsClick = () => {
    let dots = document.querySelector('.watch-bar')
    if (dots.classList.contains('active'))
        dots.classList.remove('active')
    else
        dots.classList.add('active')
}

// sendFunc

let sendFunc = function() {
    let inputForm = document.querySelector('.inputForm')
    if (inputForm.value == '')
        inputForm.style.border = "1px solid red"
    else {
        inputForm.style.border = "1px solid green"
        inputForm.value = ''
    }
}