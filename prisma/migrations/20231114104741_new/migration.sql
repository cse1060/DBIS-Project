-- AddForeignKey
ALTER TABLE
    `Property`
ADD
    CONSTRAINT `Property_agent_id_id_fkey` FOREIGN KEY (`agent_id`, `id`) REFERENCES `User_Profile`(`user_id`, `prop_id`) ON DELETE RESTRICT ON UPDATE CASCADE;