import Tuit from "../models/Tuit";
import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDao";
export default class TuitDao implements TuitDaoI{

      private static tuitDao: TuitDao | null = null;
          public static getInstance = (): TuitDao => {
              if(TuitDao.tuitDao === null) {
                  TuitDao.tuitDao = new TuitDao();
              }
              return TuitDao.tuitDao;
          }

      async findAllTuits(): Promise<Tuit[]> {
          return await TuitModel.find();
      }
      async findTuitById(tid: string): Promise<any> {
          return await TuitModel.findById(tid);
      }
      async findTuitsByUser(uid: string): Promise<Tuit[]> {
          return await TuitModel.find({postedBy:uid});
      }
      async createTuit(uid: string, tuit: Tuit): Promise<Tuit> {
          return await TuitModel.create({...tuit, postedBy: uid});
      }
      async deleteTuit(tid: string):  Promise<any> {
          return await TuitModel.deleteOne({_id: tid});
      }
      async updateTuit(tid: string, tuit: Tuit): Promise<any> {
          return await TuitModel.updateOne({_id: tid}, {$set: tuit});
      }
   }

