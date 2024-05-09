class Staff{
    constructor(
        readonly title: string,
        readonly name: string,
        readonly img: Img,
        readonly text: string
    ){}
}

class Img{
    constructor(
        readonly src: string, 
        readonly alt: string
    ){}
}

export const staffData = {
    chairperson: new Staff(
        'Chairperson',
        'John Doe',
        new Img('img/staff/chairperson.png', 'chairperson'),
        `Integer et turpis ante. Nulla sed libero turpis. 
        Aenean vel ligula laoreet, mollis odio sit amet, aliquet quam. 
        Nam sed venenatis diam, pulvinar consectetur lacus.`
    ),
    secretary: new Staff(
        'Secretary',
        'John Roe',
        new Img('img/staff/secretary.png', 'secretary'),
        `Etiam facilisis augue eget aliquet accumsan. Proin at nisl massa. 
        Aliquam a lorem congue, ornare ligula quis, dictum enim.`
    ),
    treasurer: new Staff(
        'Treasurer',
        'Jane Doe',
        new Img('img/staff/treasurer.png', 'treasurer'),
        `Proin venenatis lorem at mauris eleifend aliquam. 
        Orci varius natoque et magnis dis parturient montes, nascetur ridiculus mus. 
        Praesent eu rhoncus leo, et commodo nibh.`
    )
 } as const;