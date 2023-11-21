import pic1 from '../../public/assets/picture1.jpg'
import pic4 from '../../public/assets/picture4.jpg'
import pic5 from '../../public/assets/picture5.jpg'
import pic6 from '../../public/assets/picture6.jpg'

export const getPicture = () => {
    const pictures = [
        pic1,
        pic4,
        pic5,
        pic6
    ]
    var index = Math.floor(Math.random() * 3) + 1;
    return pictures[index];
}