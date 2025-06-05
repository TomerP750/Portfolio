import axios from "axios";
import {ContactMessage} from "../Models/ContactMessage.ts";


class ContactService {

    async sendMessage(data: ContactMessage) {
        return (await axios.post("http://localhost:8080/api/contact", data));
    }

}

const contactService = new ContactService();
export default contactService;