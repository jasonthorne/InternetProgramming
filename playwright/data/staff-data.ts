
export const staffData = {
    chairperson: {
        title: 'Chairperson',
        name: 'John Doe',
        img: {
            src: 'img/staff/chairperson.png',
            alt: 'chairperson'
        },
        text: `Integer et turpis ante. Nulla sed libero turpis. 
        Aenean vel ligula laoreet, mollis odio sit amet, aliquet quam. 
        Nam sed venenatis diam, pulvinar consectetur lacus.`
    },
    secretary: {
        title: 'Secretary',
        name: 'John Roe',
        img: {
            src: 'img/staff/secretary.png',
            alt: 'secretary'
        },
        text: `Etiam facilisis augue eget aliquet accumsan. Proin at nisl massa. 
        Aliquam a lorem congue, ornare ligula quis, dictum enim.`
    },
    treasurer: {
        title: 'Treasurer',
        name: 'Jane Doe',
        img: {
            src: 'img/staff/treasurer.png',
            alt: 'treasurer'
        },
        text: `Proin venenatis lorem at mauris eleifend aliquam. 
        Orci varius natoque et magnis dis parturient montes, nascetur ridiculus mus. 
        Praesent eu rhoncus leo, et commodo nibh.`
    }
 } as const;