import pic1 from '../../public/assets/picture1.jpg'
import pic2 from '../../public/assets/picture2.jpg'
import pic3 from '../../public/assets/picture3.jpg'
import pic4 from '../../public/assets/picture4.jpg'

export const getPicture = () => {
    const pictures = [
        pic1,
        pic2,
        pic3,
        pic4
    ]
    var index = Math.floor(Math.random() * 3) + 1;
    return pictures[index];
}