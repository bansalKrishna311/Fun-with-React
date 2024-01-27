document.addEventListener("DOMContentLoaded", function() {
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
   domElement.
   
    

}

// const reactElement = {
//     type : 'a',
//     props : {
//         href: 'https://www.google.com/',
//         target: '_blank',
//     },
//     children : 'Click Here'
// }

// const mainContainer = document.querySelector('#root')


// document.addEventListener("DOMContentLoaded", function() {
//     // Function to render the custom React element
//     function customRender(reactElement, container) {
//         const domElement = document.createElement(reactElement.type);
//         domElement.innerHTML = reactElement.children;
//         domElement.setAttribute('href', reactElement.props.href);
//         domElement.setAttribute('target', reactElement.props.target);
//         container.appendChild(domElement);
//     }

    // Define the React element
    const reactElement = {
        type: 'a',
        props: {
            href: 'https://www.google.com/',
            target: '_blank',
        },
        children: 'Click Here'
    };

    // Select the container
    const mainContainer = document.querySelector('#root');

    // Render the React element
    customRender(reactElement, mainContainer);
});