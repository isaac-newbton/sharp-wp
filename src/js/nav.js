let navTriggerButton = document.getElementById('nav_trigger_button')
let navContainer = document.getElementById('main-menu-container')
let navCloseButton = document.getElementById('nav_close_button')

if(navTriggerButton && navContainer){
    navContainer.prepend(navCloseButton)

    let toggleNav = function(){
        let navIsOff = navContainer.classList.contains('inactive')
        if(navIsOff){
            navTriggerButton.classList.remove('active')
            navTriggerButton.classList.add('inactive')
            navContainer.classList.remove('inactive')
            navContainer.classList.add('active')
            navCloseButton.focus()
        }else{
            navTriggerButton.classList.remove('inactive')
            navTriggerButton.classList.add('active')
            navContainer.classList.remove('active')
            navContainer.classList.add('inactive')
            navTriggerButton.focus()
        }
    }

    navTriggerButton.addEventListener('click', function(e){
        toggleNav()
    })

    navCloseButton.addEventListener('click', function(e){
        toggleNav()
    })
}