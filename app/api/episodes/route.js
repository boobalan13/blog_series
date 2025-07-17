import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "dataSet.json");

export async function POST(request) {
  const newEpisode = await request.json();

  const fileData = fs.readFileSync(filePath, "utf-8");
  const episodes = JSON.parse(fileData);

  episodes.push(newEpisode);

  fs.writeFileSync(filePath, JSON.stringify(episodes, null, 2));

  return NextResponse.json(
    { message: "Episode added successfully!" },
    { status: 201 }
  );
}

export async function PUT(request) {
  const updatedEpisode = await request.json();

  const fileData = fs.readFileSync(filePath, "utf-8");
  let episodes = JSON.parse(fileData);

  const index = episodes.findIndex(
    (ep) => ep.episode_id === updatedEpisode.episode_id
  );

  if (index === -1) {
    return NextResponse.json({ error: "Episode not found" }, { status: 404 });
  }

  episodes[index] = updatedEpisode;

  fs.writeFileSync(filePath, JSON.stringify(episodes, null, 2));

  return NextResponse.json(
    { message: "Episode updated successfully!" },
    { status: 200 }
  );
}
