import { getGifs } from "./getGifs";

const query = "Better Call Saul";

describe("getGifs helper function ", () => {
  test("getGifs should should return a list of gifs", async () => {
    const gifs = await getGifs(query, 5);
    console.log(gifs);

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
