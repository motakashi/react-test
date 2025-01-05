import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { rest } from "msw";
import { server } from "../../mocks/server";

describe("Users", () => {
  test("出力されていること", () => {
    render(<Users />);
    const textElement = screen.getByRole("heading", { name: "Users" });
    expect(textElement).toBeInTheDocument();
  });

  test("APIの取得分が出力されていること", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });

  test("APIが500エラーを返却した場合、エラーメッセージを表示していること", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const error = await screen.findByText("Error Fetching users");
    expect(error).toBeInTheDocument();
  });
});
