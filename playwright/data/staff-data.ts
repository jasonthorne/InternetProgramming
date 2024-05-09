
class Staff{
    constructor(
        readonly title: string,
        readonly name: string,
        readonly img: Image,
        readonly text: string
    ){}
}

class Image{
    readonly src: string = `img/staff/${this.name}.png`;

    constructor(
        readonly name: string, 
        readonly alt: string
    ){}
}

export const staffData = {
    chairperson: new Staff(
        'Chairperson',
        'John Doe',
        new Image('chairperson', 'chairperson'),
        `Integer et turpis ante. Nulla sed libero turpis. 
        Aenean vel ligula laoreet, mollis odio sit amet, aliquet quam. 
        Nam sed venenatis diam, pulvinar consectetur lacus.`
    ),
    secretary: new Staff(
        'Secretary',
        'John Roe',
        new Image('secretary', 'secretary'),
        `Etiam facilisis augue eget aliquet accumsan. Proin at nisl massa. 
        Aliquam a lorem congue, ornare ligula quis, dictum enim.`
    ),
    treasurer: new Staff(
        'Treasurer',
        'Jane Doe',
        new Image('treasurer', 'treasurer'),
        `Proin venenatis lorem at mauris eleifend aliquam. 
        Orci varius natoque et magnis dis parturient montes, nascetur ridiculus mus. 
        Praesent eu rhoncus leo, et commodo nibh.`
    )
 } as const;