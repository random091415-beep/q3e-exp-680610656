import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <Drawer swipeDirection="left">
      <DrawerTrigger
        render={<Button variant="secondary">Kittiphob Intham</Button>}
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="size-full rounded-2xl bg-muted">
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
              <img
                src="/20240712_191334.webp"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
              />
              <CardHeader>
                <CardTitle>Kittiphob intham</CardTitle>
                <CardDescription>
                  นักศึกษาภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
                  มหาวิทยาลัยเชียงใหม่
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="px-(--card-spacing)">
                  <p className="my-2">
                    <Badge>Hobbies</Badge>
                    ดูอนิเมะ, ฟังเพลง, เล่นเกม
                  </p>
                  <p className="my-2">
                    <Badge>Email</Badge>
                    kittiphob_i@cmu.ac.th
                  </p>
                  <p className="my-2">
                    <Badge>Social</Badge>
                    https://www.facebook.com/kittiphopjj/
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)">
                  รหัสนักศึกษา: 680610656
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
