import { NextResponse } from "next/server"
import { searchFolder, listAllFolders } from "@/lib/drive-operations"

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const courseName = searchParams.get('courseName');
    if (!courseName) throw { message: "courseName isn't provided" }
    let data;
    if (courseName === "*") {
      data = await listAllFolders('Materials');
      data.sort((f1, f2) => {
        return f1.name.localeCompare(f2.name)
      })
    } else {
      const courseFolderID = await searchFolder(courseName, 'Materials');
      data = { id: courseFolderID, name: courseName };
    }
    return NextResponse.json({ success: true, data })
  }
  catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, error: e.message }, { status: 500 })
  }
}
