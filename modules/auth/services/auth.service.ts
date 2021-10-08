import {IAuth} from "../types/auth.type";
import auth from '../schemas/auth.schema';
import mongoose from "mongoose";

export class AuthService {
  public createAuth(authParams: IAuth, callback: mongoose.Callback) {
    const _auth = new auth(authParams);
    _auth.save(callback);
  }

  public updateAuth(_uid: mongoose.Types.ObjectId, authParams: IAuth, callback: mongoose.Callback) {
    auth.findOneAndUpdate({ _uid: _uid }, authParams,null,callback)
  }

  public deleteAuth(_uid: mongoose.Types.ObjectId,callback: mongoose.Callback) {
    auth.findOneAndUpdate({_uid: _uid}, {isDeleted: true}, callback);
  }

  public restoreAuth(_id: mongoose.Types.ObjectId,callback: mongoose.Callback) {
    auth.findOneAndUpdate({_id: _id}, {isDeleted: false}, callback);
  }

  public filterAuth(filters: any, callback: mongoose.Callback) {
    auth.find(filters, callback);
  }
}
