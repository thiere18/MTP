import { getRepository } from "typeorm";
import { User } from "./entity/User";
// import {User} from "./entity/User"
export const Bootstrap = () => {
    const userRepository = getRepository(User)
    const user = userRepository.create({ firstname: "thier", lastname: "lo" });
    userRepository.save(user).catch(err => {
        console.log(err);
    });
    console.log(user.id);
}