import {
  Divider,
  Drawer,
  ListItem,
  makeStyles,
  Typography,
  List,
  Button,
  Icon,
} from '@material-ui/core';
import { ChevronLeft, PlayCircleFilled } from '@material-ui/icons';
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

const useStyles = makeStyles((theme) => ({
  root: {},
  list: {
    width: '280px',
  },
  btn: {
    color: 'transparent',
    height: '100vh',
    width: '100px',
    backgroundColor: 'transparent',
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    right: 0,
    '&:hover': {
      color: 'rgb(255, 255, 255, 0.8)',
      backgroundImage: 'linear-gradient(to left, rgb(0,0,0,0.4) , transparent)',
    },
  },
  listItem: {
    // backgroundColor: 'rgb(0,0,0,0.5)',
    margin: '2px 0px',
    width: '100%',
  },
  icon: {
    fontSize: '150px',
  },
}));

export default function VideoPage() {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=N9e_fFz12t4&t');

  const toggleDrawer = (status) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(status);
  };

  const videoList = [
    {
      name: 'Video 1',
      url: 'https://www.youtube.com/watch?v=ICRB3wqbzzI',
    },
    {
      name: 'Video 2',
      url: 'https://www.youtube.com/watch?v=2CLV9vTkXiU',
    },
    {
      name: 'Video 3',
      url: 'https://www.youtube.com/watch?v=pK2XfBuM9a8',
    },
    {
      name: 'Video 4',
      url: 'https://www.youtube.com/watch?v=xwRdVWTQ4AM',
    },
    {
      name: 'Video 5',
      url: 'https://www.youtube.com/watch?v=JyPzh69ZCyw',
    },
  ];

  return (
    <div>
      <VideoPlayer videoUrl={url} />
      <Button className={classes.btn} onClick={toggleDrawer(true)}>
        <ChevronLeft className={classes.icon} />
      </Button>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={open}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Divider />
          <List className={classes.list}>
            <ListItem>
              <Typography variant="h6">Classroom Lessons</Typography>
            </ListItem>
            <Divider />
            {videoList.map(({ name, url }, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  setUrl(url);
                }}
                className={classes.listItem}>
                <PlayCircleFilled style={{ color: 'lightskyblue', marginRight: '12px' }} />
                <Typography variant="caption">{name}</Typography>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className={classes.list}>
            {['Video 6', 'video 7', 'Video 8'].map((text, index) => (
              <ListItem button key={text} className={classes.listItem}>
                <PlayCircleFilled style={{ color: 'lightskyblue', marginRight: '12px' }} />
                <Typography variant="caption">{text}</Typography>
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}
