function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(jkhgjlhk)
}

const reactElement = {
    type : 'a',
    props : {
        href: 'https://www.google.com/',
        target: '_blank',
    },
    children : 'Click Here'
}

const mainContainer = document.querySelector('#root')

