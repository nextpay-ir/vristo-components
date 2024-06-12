import Button from "./components/Button"
import HelperText from "./components/HelperText"
import IconButton from "./components/IconButton"
import IconInput from "./components/IconInput"
import Input from "./components/Input"
import Label from "./components/Label"
import { Icon } from '@iconify/react';
import Select from "./components/Select"
import Radio from "./components/Radio"
import Checkbox from "./components/Checkbox"
import Switch from "./components/Switch"
import Typography from "./components/Typography"

function App() {

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        {/* <Button intent="primary">Primary Small</Button>
        <Button intent="outlinePrimary">outline Primary Small</Button>
        <Button intent="secondary" size="large">Secondary Medium</Button>
        <Button intent="outlineSecondary" size="large">outline Secondary Medium</Button>
        <Button intent="success" size="large">Secondary Medium</Button>

        <Button intent="outlineSuccess" size="large">Secondary Medium</Button>

        <Button intent="danger" size="large">Secondary Medium</Button>

        <Button intent="outlineDanger" size="large">Secondary Medium</Button>

        <Button intent="warning" size="large">Secondary Medium</Button>

        <Button intent="outlineWarning" size="large">Secondary Medium</Button>

        <Button intent="info" size="large">Secondary Medium</Button>

        <Button intent="outlineInfo" size="large">Secondary Medium</Button>

        <Button intent="dark" size="large">Secondary Medium</Button>
        <Button intent="outlineDark" size="large">Secondary Medium</Button>

        <Input placeholder="Small Input" size="large" /> */}
        {/* <div className="flex flex-col gap-2">
          <Label isError={true}>
            this is the input label
          </Label>
          <Input placeholder="Large Input" />
          <HelperText isSuccess={true}>
            this is a success message
        </HelperText>
          <HelperText isError={true}>
            this is not a success message
          </HelperText>
        </div> */}
        {/* <IconInput label="this is the label" icon="material-symbols:alternate-email-rounded" placeholder="this is the placeholder of input" /> */}
        {/* <Button
          className="w-fit"
          icon={<Icon icon="material-symbols-light:stacked-email-outline-rounded" width={22} height={22} color="white" />}
          iconPosition="left" intent="secondary" size="large">
          Button Text
        </Button> */}

        {/* <Select
          size="large"
          isError={true}
          options={[
            { value: '', label: 'Open this select menu' },
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
            { value: 'three', label: 'Three' }
          ]}
        /> */}
        {/* <Radio name="my-radio" text="this is the fucking radio" value={""} size="medium" /> */}
        {/* <Button outline="dark" size="large">Secondary Medium</Button>
        <Button fill="dark" size="large">Secondary Medium</Button> */}
        {/* <Checkbox className="rounded-full" text="this is a checkbox" value={""} size="small" /> */}
        {/* <Switch value={""} /> */}
        {/* <div>
          <Typography as="h1" size="large" weight="bold" color="primary">
            This is a heading
          </Typography>
          <Typography as="p" size="medium" weight="normal" color="secondary">
            This is a paragraph
          </Typography>
          <Typography as="span" size="small" weight="semibold" color="success">
            This is a span
          </Typography>
        </div> */}
      </div>
    </>
  )
}

export default App
