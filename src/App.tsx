import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-background p-10 text-foreground">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          <header className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Gamers Guild DS</h1>
            <Button variant="outline" onClick={() => setDark(!dark)}>
              {dark ? "☀️ Light" : "🌙 Dark"}
            </Button>
          </header>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Button</h2>
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
              <Button disabled>Disabled</Button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="xs">XS</Button>
              <Button size="sm">SM</Button>
              <Button>Default</Button>
              <Button size="lg">LG</Button>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Badge</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Card + Input + Label</h2>
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>Entrar na guilda</CardTitle>
                <CardDescription>Escolha seu nickname de jogador.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Label htmlFor="nick">Nickname</Label>
                <Input id="nick" placeholder="ex: DragonSlayer99" />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Entrar</Button>
              </CardFooter>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
