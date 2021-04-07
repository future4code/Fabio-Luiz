import app from "./app";
import { getAllUsers } from './endpoints/getAllUsers';
import {getUsersByName} from './endpoints/getUsersByName';
import { getUsersByType } from './endpoints/getUsersByType';
import { getAllUsersOrdened } from './endpoints/getAllUsersOrdened';
import { getAllUsersLimitPage } from './endpoints/getAllUsersLimitPage';
import { getUsersComplete } from './endpoints/getUsersComplete';

app.get("/user/all", getAllUsers);

app.get("/user/:type", getUsersByType);

app.get("/user", getUsersComplete);
