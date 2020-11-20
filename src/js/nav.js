let navTriggerButton = document.getElementById('site_nav_button')
let navContainer = document.getElementById('site_nav_wrapper')

if(navTriggerButton && navContainer){
    let setNavState = function(on = false){
        navTriggerButton.classList.remove(on ? 'active' : 'inactive')
        navTriggerButton.classList.add(on ? 'inactive' : 'active')
        if(on){
            navContainer.classList.add('active')
        }else{
            navContainer.classList.remove('active')
        }
    }

    let toggleNav = function(){
        let navIsOff = !navContainer.classList.contains('active')
        if(navIsOff){
            setNavState(true)
        }else{
            setNavState(false)
        }
    }

    navTriggerButton.addEventListener('click', function(e){
        toggleNav()
    })
}