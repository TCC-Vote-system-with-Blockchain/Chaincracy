import pic1 from '../../public/assets/picture1.jpg'
import pic2 from '../../public/assets/picture2.jpg'
import pic3 from '../../public/assets/picture3.jpg'
import pic4 from '../../public/assets/picture4.jpg'

export const candidatesMock = () => {
    const candidates = [
        {
            name: 'João Wudarski',
            number: 131333,
            picture: pic1,
            vote: 190
        },
        {
            name: 'Eduardo Campos',
            number: 121222,
            picture: pic2,
            vote: 10

        },
        {
            name: 'Matheus Frate',
            number: 151555,
            picture: pic3,
            vote: 709
        },
        {
            name: 'Jardini',
            number: 161666,
            picture: pic4,
            vote: 200
        }
    ]
    return candidates;
}