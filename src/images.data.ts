export const images = ["/assets/user-1.png", "/assets/user-2.png", "/assets/user-3.png", "/assets/user-4.png", "/assets/user-5.png", "/assets/user-6.jpg", "/assets/user-7.jpg", "/assets/user-8.jpg", "/assets/user-9.jpg", "/assets/user-10.jpg"];


export const getUserImage = (userId: number) => {
    const index = (userId - 1) % images.length;
    return images[index]
}