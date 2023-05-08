import { random } from "lodash";
import { Memo } from "../types";
import envService from "./EnvService";

export class MemoService {
  private pushTags = envService.envs.PUSH_TAGS.split(",");

  private getMemo(memos: Memo[]) {
    return memos[random(memos.length - 1)];
    // return this.convertMemoToHtml(memos[random(memos.length - 1)]);
  }

  getLuckyMemo(memos: Memo[]) {
    // const tagMemos = memos.filter((memo) =>
    //   this.pushTags.some((tag) =>
    //     memo.tags.some((memoTag) => memoTag.includes(tag))
    //   )
    // );
    // if (tagMemos.length) {
    //   return this.getMemo(tagMemos);
    // }
    if(memos.length){
      return null
    }
    return this.getMemo(memos);
  }

  getTodayMemo(memos: Memo[]) {
    const today = new Date();
    const todayMemos = memos.filter((memo) => {
      const date = new Date(memo.createdTs);
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth()
      );
    });
    if(todayMemos.length){
      return null
    }
    return this.getMemo(todayMemos);
  }
}
