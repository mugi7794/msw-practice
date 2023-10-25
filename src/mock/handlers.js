import { http, HttpResponse } from "msw";

const todos = [
  { name: "수현", age: 28, hobby: "먹기" },
  { name: "주현", age: 29, hobby: "놀기" },
];

export const handlers = [
  //할일 목록
  http.get("/todos", () => {
    return HttpResponse.json(todos);
  }),

  // 할 일 추가
  http.post("/todos", ({ request }) => {
    todos.push(request);
    return new HttpResponse(null, { status: 201 });
  }),
];
