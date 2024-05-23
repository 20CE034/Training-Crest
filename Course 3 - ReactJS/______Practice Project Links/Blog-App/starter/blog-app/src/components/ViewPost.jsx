import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fetchPostsReq } from '../store/reducers/postsSlice';
import GradientCircularProgress from './GradientCircularProgress';

export default function ViewPost() {
	const dispatch = useDispatch();
	const { posts, loading, error } = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(fetchPostsReq());
	}, [dispatch]);

	if (loading) return <GradientCircularProgress />;
	if (error) return <div>Error: {error}</div>;

	return (
		<Grid container spacing={2}>
			<Grid item xs={8}>
				{posts.map((post) => (
					<Card key={post.id} sx={{ minWidth: 275, marginBottom: 2 }}>
						<CardContent>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								Written on {new Date(post.datePublished).toLocaleDateString()}
							</Typography>
							<Typography variant="h5" component="div">
								{post.title}
							</Typography>
							<Typography sx={{ mb: 1.5 }} color="text.secondary">
								by {post.author}
							</Typography>
							<Typography variant="body2">{post.description}</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				))}
			</Grid>
			<Grid item xs={4}>
				<List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
					<Typography
						className="raleway"
						variant="h4"
						component="h2"
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							bgcolor: 'background.default',
							marginBottom: 2,
						}}
					>
						Top Authors
					</Typography>
					{posts.map((post, index) => (
						<React.Fragment key={index}>
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<Avatar
										alt={post.author}
										src={`https://xsgames.co/randomusers/avatar.php?g=pixel&user=${post.authorId}`}
									/>
								</ListItemAvatar>
								<ListItemText
									primary={post.author}
									secondary={
										<React.Fragment>
											<Typography
												sx={{ display: 'inline' }}
												component="span"
												variant="body2"
												color="text.primary"
											>
												{post.author}
											</Typography>
											{' — '}
											{post.description}
										</React.Fragment>
									}
								/>
							</ListItem>
							{index < posts.length - 1 && <Divider variant="inset" component="li" />}
						</React.Fragment>
					))}
				</List>
			</Grid>
		</Grid>
	);
}
