import pic1 from '../../public/assets/picture1.jpg'
import pic2 from '../../public/assets/picture2.jpg'
import pic3 from '../../public/assets/picture3.jpg'
import pic4 from '../../public/assets/picture4.jpg'
import defaultPic from '../../public/assets/Default_person.jpg'

export const candidatesMock = (numberToFind: number) => {
    const candidates = [
        {
            name: 'João Wudarski',
            number: 131333,
            picture: pic1
        },
        {
            name: 'Eduardo Campos',
            number: 121222,
            picture: pic2
        },
        {
            name: 'Matheus Frate',
            number: 151555,
            picture: pic3
        },
        {
            name: 'Jardini',
            number: 161666,
            picture: pic4
        }
    ]
    const candidate = candidates.find(candidate => candidate.number === numberToFind);

    return candidate ? candidate : {
        name: 'Desconhecido',
        number: '',
        picture: defaultPic
    }
}