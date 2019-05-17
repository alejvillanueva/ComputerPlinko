var levels = [
	{
		//Tutorial Level, should say something like press space to drop ball
		//Three coloumns
		goal: 1,
		permitted: 0,
		boxes: [],
		box_col: 3,
		ball_start: 1
	},

	{
		//Same kinda level
		//Three Columns
		goal: 2,
		permitted: 5,
		boxes: [[0, 7, 'b', ''], [2, 7, 'b', '']],
		box_col: 3,
		ball_start: 1
	},

	{
		//Tutorial Level, should say something like you re allowed to use
		//these green pieces to help ball. For this level, show where the green triangle goes
		//Three coloumns
		goal: 0,
		permitted: 3,
		boxes: [[0, 7, 'b', ''], [1, 7, 'b', '']],
		box_col: 3,
		ball_start: 2
	},

	{
		//Four Columns
		goal: 1,
		permitted: 7,
		boxes: [[0, 6, 'b', ''], [0, 13, 'r', ''], [1, 1, 'b', ''], [2, 1, 'b', ''], [2, 13, 'l', ''], [3, 6, 'b', '']],
		box_col: 4,
		ball_start: 2
	},

	{
		//Four Columns, lol not sure what the solution is atm but we can test or just change lvl
		goal: 1,
		permitted: 5,
		boxes: [[0, 4, 'b', ''], [0, 5, 't', ''], [1, 9, 'b', ''], [1, 10, 't', ''], [2, 1, 'b', ''], [2, 2, 't', ''], [3, 7, 'b', ''], [3, 8, 't', '']],
		box_col: 4,
		ball_start: 1
	},

	{ //Six Columns
		goal : 1,
		permitted : 4,
		boxes : [[0, 2, 'b', ''], [0, 12, 'b', ''], [1, 10, 'b', ''], [2, 8, 'b', ''], [3, 6, 'b', ''], [4, 4, 'b', ''], [5, 2, 'b', '']],
		box_col: 6,
		ball_start: 0
	},

	{ //Six Columns
		goal : 3,
		permitted : 4,
		boxes : [[0, 1, 'bl', ''], [0, 2, 'tr', ''], [0, 6, 'bl', ''], [0, 7, 'tr', ''], [1, 2, 'bl', ''], [1, 5, 'r', ''], [1, 7, 'bl', ''], [1, 8, 'tr', ''], [2, 4, 'br', ''], [2, 5, 'tl', ''], [2, 8, 'l', ''], [3, 3, 'br', ''], [3, 4, 'tl', ''], [4, 1, 'bl', ''], [4, 2, 'tbl', ''], [4, 3, 'tl', ''], [5, 1, 'b', '']],
		box_col: 5,
		ball_start: 0
	},
	{
		goal : 5,
		permitted : 2,
		boxes : [[0, 7, 't', ''], [0, 8, 'r', ''], [0, 9, 'l', ''], [0, 10, 'r', ''], [0, 11, 'l', ''], [0, 12, 'r', ''], [0, 13, 'l', ''], [1, 9, 'b', ''], [2, 5, 't', ''], [2, 6, 'l', ''], [2, 9, 't', ''], [2, 11, 'l', ''], [2, 13, 'l', ''], [3, 4, 't', ''], [3, 9, 't', ''], [3, 12, 'l', ''], [4, 3, 't', ''], [4, 5, 'b', ''], [4, 8, 'l', ''], [4, 13, 'l', ''], [5, 2, 't', ''], [5, 4, 'b', ''], [5, 9, 'l', ''], [5, 11, 'b', ''], [5, 13, 'r', ''], [6, 1, 't', ''], [6, 3, 'b', ''], [6, 12, 'b', ''], [7, 2, 'b', ''], [7, 9, 'b', ''], [8, 1, 'br', ''], [8, 8, 'b', '']],
		box_col: 9,
		ball_start: 5
	},
	{
		goal : 10,
		permitted : 5,
		boxes : [[10, 5, "tblr", ""]],
		box_col: 15,
		ball_start: 10
	},
	{
		goal : 4,
		permitted : 7,
		boxes : [[4, 5, "br", ""], [3, 6, "br", ""], [2, 7, "br", ""], [5, 5, "lb", ""], [6, 6, "t", ""], [7, 6, "t", ""]],
		box_col: 15,
		ball_start: 5
	},
	{
		goal : 7,
		permitted : 5,
		boxes : [[0, 3, 'b', ''], [1, 1, 'r', ''], [1, 2, 'r', ''], [1, 4, 'b', ''], [2, 2, 'b', ''], [2, 3, 'r', ''], [2, 5, 'b', ''], [3, 3, 'b', ''], [3, 4, 'r', ''], [3, 6, 'b', ''], [4, 2, 'r', ''], [4, 4, 'b', ''], [4, 5, 'r', ''], [4, 7, 'b', ''], [5, 1, 'l', ''], [5, 3, 'r', ''], [5, 5, 'b', ''], [5, 6, 'r', ''], [6, 2, 'l', ''], [6, 4, 'r', ''], [6, 6, 'b', ''], [6, 7, 'r', ''], [6, 9, 'br', ''], [7, 3, 'l', ''], [7, 5, 'r', ''], [7, 7, 'b', ''], [7, 8, 'r', ''], [8, 4, 'l', ''], [8, 6, 'r', ''], [8, 9, 'r', ''], [9, 5, 'l', ''], [9, 6, 'r', ''], [9, 8, 'l', ''], [9, 9, 'r', ''], [9, 11, 'l', ''], [10, 2, 'r', ''], [10, 3, 'r', ''], [10, 4, 'r', ''], [10, 5, 'r', ''], [10, 6, 'l', ''], [10, 7, 'b', ''], [10, 8, 't', ''], [10, 9, 'l', ''], [10, 10, 'r', ''], [10, 12, 'l', ''], [11, 6, 'l', ''], [11, 8, 'b', ''], [11, 9, 't', ''], [11, 10, 'l', ''], [11, 13, 'bl', ''], [12, 3, 'r', ''], [12, 4, 'l', ''], [12, 7, 'l', ''], [12, 9, 'b', ''], [12, 10, 't', ''], [12, 13, 'br', ''], [13, 2, 'r', ''], [13, 8, 'l', ''], [13, 9, 'r', ''], [13, 12, 'r', ''], [14, 1, 'r', ''], [14, 11, 'r', '']],
		box_col: 15,
		ball_start: 7
	},
	{
		goal : 5,
		permitted : 3,
		boxes : [[0, 1, 'b', ''], [0, 3, 'b', ''], [1, 2, 'b', ''], [1, 4, 'b', ''], [1, 9, 'b', ''], [1, 13, 'b', ''], [2, 1, 'b', ''], [2, 5, 'b', ''], [2, 9, 't', ''], [3, 4, 'b', ''], [3, 8, 'b', ''], [3, 12, 'b', ''], [4, 3, 'b', ''], [4, 7, 'b', ''], [4, 9, 'b', ''], [4, 11, 'b', ''], [4, 13, 'b', ''], [5, 2, 'b', ''], [5, 4, 'b', ''], [5, 6, 'b', ''], [5, 8, 'b', ''], [5, 10, 'b', ''], [6, 5, 'b', ''], [6, 13, 'b', ''], [7, 2, 't', ''], [7, 4, 'b', ''], [7, 6, 'b', ''], [7, 8, 'b', ''], [7, 10, 't', ''], [7, 12, 'b', ''], [8, 1, 'b', ''], [8, 9, 'b', ''], [8, 11, 'b', ''], [8, 13, 'b', ''], [9, 2, 'b', ''], [9, 4, 'b', ''], [9, 6, 'b', ''], [9, 8, 'b', ''], [9, 10, 'b', ''], [9, 12, 'b', ''], [10, 1, 'b', ''], [10, 3, 'b', ''], [10, 5, 'b', ''], [10, 7, 'b', ''], [10, 11, 'b', ''], [10, 13, 'b', ''], [11, 8, 'b', ''], [11, 10, 't', ''], [11, 12, 'b', ''], [12, 1, 'b', ''], [12, 3, 'b', ''], [12, 7, 't', ''], [12, 9, 'b', ''], [13, 4, 'b', ''], [13, 6, 'b', ''], [13, 8, 'b', ''], [13, 10, 'b', ''], [13, 12, 'b', ''], [14, 1, 'b', ''], [14, 3, 'b', ''], [14, 5, 'b', ''], [14, 7, 'b', ''], [14, 9, 'b', ''], [14, 11, 'b', ''], [14, 13, 'b', '']],
		box_col: 15,
		ball_start: 3
	},
	{
		goal : 10,
		permitted : 6,
		boxes : [[0, 1, "t", ""], [1, 1, "t", ""], [2, 1, "t", ""], [3, 1, "t", ""], [4, 1, "t", ""], [5, 1, "t", ""], [6, 1, "t", ""], [7, 1, "t", ""], [8, 1, "tr", ""], [8, 2, "r", ""], [8, 3, "r", ""], [8, 4, "r", ""], [8, 5, "r", ""], [9, 1, "tl", ""], [9, 6, "bl", ""], [9, 11, "br", ""], [10, 1, "t", ""], [10, 7, "bl", ""], [10, 11, "t", ""], [11, 1, "t", ""], [11, 5, "br", ""], [11, 8, "t", ""], [11, 11, "t", ""], [12, 1, "t", ""], [12, 4, "br", ""], [12, 8, "l", ""], [12, 10, "br", ""], [13, 1, "t", ""], [13, 3, "br", ""], [13, 9, "br", ""], [14, 2, "br", ""], [14, 8, "br", ""]],
		box_col: 15,
		ball_start: 14
	},
	{
		goal : 0,
		permitted : 0,
		boxes : [[1, 13, "b", "r"], [2, 13, "", "t"], [3, 13, "", "t"], [4, 12, "", "br"], [5, 11, "", "br"], [6, 11, "t", ""], [7, 11, "", "t"], [8, 10, "b", ""], [9, 9, "", "b"], [10, 8, "", "b"], [11, 7, "", "b"], [12, 6, "b", ""], [13, 5, "", "b"], [14, 4, "", "br"]],
		box_col: 15,
		ball_start: 13
	},
	{
		goal : 9,
		permitted : 2,
		boxes : [[0, 1, 't', ''], [0, 4, 'bl', ''], [1, 1, 't', ''], [1, 5, 'bl', ''], [2, 1, 't', ''], [2, 6, 'bl', ''], [3, 1, 't', ''], [3, 7, 'bl', ''], [4, 1, 'tr', ''], [4, 2, 'r', ''], [4, 3, 'r', ''], [4, 8, 'bl', ''], [5, 1, 't', ''], [5, 4, 'bl', ''], [5, 9, 'bl', ''], [6, 2, 'br', ''], [6, 5, 't', ''], [6, 6, 'r', ''], [6, 7, 'r', ''], [6, 10, 'tr', ''], [6, 11, 'r', ''], [7, 1, 'br', ''], [7, 5, 't', ''], [7, 8, 'bl', ''], [7, 12, 'bl', ''], [8, 1, 't', ''], [8, 6, 'br', ''], [8, 10, 'br', ''], [8, 13, 'tr', ''], [9, 1, 't', ''], [9, 3, 'l', ''], [9, 4, 'l', ''], [9, 5, 'l', ''], [9, 8, 'tl', ''], [9, 9, 'l', ''], [10, 1, 't', ''], [10, 7, 'br', ''], [10, 12, 'l', ''], [10, 13, 'l', ''], [11, 1, 't', ''], [11, 6, 'br', ''], [12, 1, 't', ''], [12, 5, 'br', ''], [13, 1, 't', ''], [13, 4, 'br', ''], [14, 1, 't', 'b'], [14, 3, 'br', ''], [0, 2, '', 'b'], [0, 3, '', 'r'], [1, 3, '', 'b'], [1, 4, '', 'r'], [2, 4, '', 'b'], [2, 5, '', 'r'], [3, 5, '', 'b'], [3, 6, '', 'r'], [4, 6, '', 'b'], [4, 7, '', 'r'], [5, 7, '', 'b'], [5, 8, '', 'r'], [10, 5, '', 'b'], [10, 6, '', 'l'], [11, 4, '', 'b'], [11, 5, '', 'l'], [12, 3, '', 'b'], [12, 4, '', 'l'], [13, 2, '', 'b'], [13, 3, '', 'l'], [14, 2, '', 'l']],
		box_col: 15,
		ball_start: 7
	},

	{
		goal : 0,
		permitted : 10,
		boxes : [[0, 5, "", "r"], [0, 6, "", "r"], [0, 7, "", "r"], [0, 8, "", "r"], [1, 4, "", "tl"], [1, 5, "", "bl"], [1, 7, "", "r"], [1, 9, "", "t"], [2, 3, "", "b"], [2, 5, "", "t"], [2, 6, "", "r"], [2, 7, "", "b"], [2, 9, "", "t"], [2, 10, "", "lr"], [3, 3, "", "b"], [3, 5, "", "t"], [3, 6, "", "l"], [3, 7, "", "b"], [3, 9, "", "t"], [3, 10, "", "lr"], [4, 4, "", "tr"], [4, 5, "", "br"], [4, 7, "", "l"], [4, 9, "", "t"], [5, 5, "", "l"], [5, 6, "", "l"], [5, 7, "", "l"], [5, 8, "", "l"], [1, 13, "br", ""], [2, 13, "t", ""], [3, 13, "t", ""], [4, 12, "br", ""], [5, 11, "br", ""], [6, 11, "t", ""], [7, 11, "t", ""], [8, 10, "b", ""], [9, 9, "b", ""], [10, 8, "b", ""], [11, 7, "b", ""], [12, 6, "b", ""], [13, 5, "b", ""], [14, 4, "br"]],
		box_col: 15,
		ball_start: 13
	}, 
	
	{
		goal : 13,
		permitted : 10,
		boxes : [[0, 10, 'br', ''], [0, 11, 'tl', ''], [0, 13, 'br', ''], [1, 9, 'br', ''], [1, 12, 'br', ''], [2, 9, 'tl', ''], [2, 12, 'tl', ''], [3, 7, 'br', ''], [3, 8, 'tl', ''], [3, 11, 'tl', ''], [3, 13, 'br', ''], [4, 9, 'br', ''], [4, 12, 'br', ''], [5, 6, 't', ''], [5, 9, 'tl', ''], [5, 12, 'tl', ''], [6, 4, 'br', ''], [6, 5, 'tl', ''], [6, 7, 'br', ''], [6, 8, 'tl', ''], [6, 13, 'br', ''], [7, 3, 'br', ''], [7, 6, 'br', ''], [7, 9, 'br', ''], [7, 12, 'br', ''], [8, 3, 'tl', ''], [8, 6, 'tl', ''], [8, 9, 'tl', ''], [8, 12, 'tl', ''], [9, 1, 'br', ''], [9, 2, 'tl', ''], [9, 4, 'br', ''], [9, 5, 'tl', ''], [9, 7, 'br', ''], [9, 8, 'tl', ''], [9, 11, 'tl', ''], [9, 13, 'br', ''], [10, 3, 'br', ''], [10, 6, 'br', ''], [10, 9, 'br', ''], [10, 12, 'br', ''], [11, 3, 'tl', ''], [11, 6, 'tl', ''], [11, 9, 'tl', ''], [12, 1, 'br', ''], [12, 2, 'tl', ''], [12, 4, 'br', ''], [12, 5, 'tl', ''], [12, 7, 'br', ''], [12, 8, 'tl', ''], [12, 10, 'br', ''], [12, 13, 'br', ''], [13, 3, 'br', ''], [13, 6, 'br', ''], [13, 9, 'br', ''], [14, 3, 'tl', ''], [14, 6, 'tl', ''], [14, 9, 'tl', ''], [14, 12, 'tl', '']],
		box_col: 15,
		ball_start: 0
	},
	{
		goal: 4,
		permitted: 3,
		boxes: [[0, 6, 'r', ''], [1, 3, 'l', ''], [1, 9, 'b', ''], [2, 5, 't', ''], [2, 6, 't', ''], [2, 7, 'l', ''], [2, 11, 'l', ''], [2, 13, 't', ''], [3, 2, 'b', ''], [3, 8, 'b', ''], [3, 11, 'r', ''], [4, 5, 't', ''], [4, 12, 'r', ''], [5, 1, 'b', ''], [5, 4, 't', ''], [5, 6, 't', ''], [5, 8, 't', ''], [5, 10, 'l', ''], [6, 3, 'r', ''], [6, 11, 'l', ''], [7, 1, 'l', ''], [7, 8, 'r', ''], [7, 10, 't', '']],
		box_col: 8,
		ball_start: 4
	},
	{
		goal: 14,
		permitted: 5,
		boxes: [[0, 1, 't', ''], [1, 1, 't', ''], [2, 1, 't', ''], [3, 1, 't', ''], [4, 1, 't', ''], [5, 1, 't', ''], [6, 1, 't', ''], [7, 1, 't', ''], [8, 1, 't', ''], [8, 4, 'r', ''], [8, 5, 'r', ''], [8, 6, 'r', ''], [8, 7, 'r', ''], [8, 8, 'r', ''], [8, 9, 'r', ''], [8, 10, 'r', ''], [8, 12, 'r', ''], [9, 1, 't', ''], [9, 3, 'tl', ''], [9, 13, 'tblr', ''], [10, 2, 'br', ''], [10, 5, 'bl', ''], [10, 6, 'lr', ''], [10, 7, 'lr', ''], [10, 8, 'lr', ''], [10, 9, 'lr', ''], [10, 10, 'lr', ''], [10, 11, 'lr', ''], [10, 12, 'lr', ''], [10, 13, 'blr', ''], [11, 1, 'br', ''], [11, 6, 'b', ''], [11, 7, 'tb', ''], [11, 8, 'tb', ''], [11, 9, 'tb', ''], [11, 10, 'tb', ''], [11, 11, 'tb', ''], [11, 12, 'tb', ''], [11, 13, 'tb', ''], [12, 1, 't', ''], [12, 7, 'bl', ''], [12, 8, 'lr', ''], [12, 9, 'lr', ''], [12, 10, 'lr', ''], [12, 11, 'lr', ''], [12, 12, 'lr', ''], [12, 13, 'blr', ''], [13, 1, 't', ''], [13, 8, 'b', ''], [13, 9, 'tb', ''], [13, 10, 'tb', ''], [13, 11, 'tb', ''], [13, 12, 'tb', ''], [13, 13, 'tb', ''], [14, 1, 't', '']],
		box_col: 15,
		ball_start: 11,
		conveyor_balls: [{num_between: 4,
		 r: .25, 
		 wh_from_x: 9.75, 
		 wh_from_y: 4.25, 
		 wh_to_x: 9.75, 
		 wh_to_y: 12.5, 
		 x_vel: 0, y_vel: -1},
		 {num_between: 4,
		 r: .25, 
		 wh_from_x: 9.25, 
		 wh_from_y: 4.25, 
		 wh_to_x: 9.25, 
		 wh_to_y: 12.5, 
		 x_vel: 0, y_vel: -1}]
	},
	{
		goal : 4,
		permitted : 6,
		boxes : [[0, 2, 't', ''], [0, 4, 't', ''], [0, 6, 't', ''], [0, 8, 't', ''], [0, 10, 't', ''], [0, 12, 't', ''], [1, 2, 't', ''], [1, 4, 't', ''], [1, 6, 't', ''], [1, 10, 'l', ''], [1, 12, 't', ''], [2, 2, 't', ''], [2, 4, 'l', ''], [2, 6, 't', ''], [2, 8, 'r', ''], [2, 12, 't', ''], [3, 2, 't', ''], [3, 4, 'r', ''], [3, 6, 't', ''], [3, 8, 't', ''], [3, 10, 't', ''], [3, 12, 't', ''], [4, 2, 'l', ''], [4, 4, 't', ''], [4, 6, 't', ''], [4, 8, 't', ''], [4, 10, 't', ''], [5, 4, 't', ''], [5, 6, 't', ''], [5, 8, 't', ''], [5, 10, 't', ''], [5, 12, 'r', ''], [6, 2, 't', ''], [6, 4, 't', ''], [6, 6, 'l', ''], [6, 8, 't', ''], [6, 10, 'l', ''], [6, 12, 't', ''], [7, 2, 't', ''], [7, 4, 'l', ''], [7, 8, 't', ''], [7, 10, 'r', ''], [7, 12, 't', ''], [8, 2, 't', ''], [8, 6, 't', ''], [8, 8, 't', ''], [8, 10, 't', ''], [8, 12, 't', ''], [9, 2, 't', ''], [9, 4, 't', ''], [9, 6, 't', ''], [9, 8, 't', ''], [9, 10, 't', ''], [9, 12, 'l', ''], [10, 4, 't', ''], [10, 6, 't', ''], [10, 8, 't', ''], [11, 2, 'r', ''], [11, 4, 't', ''], [11, 6, 'l', ''], [11, 10, 'r', ''], [11, 12, 't', ''], [12, 2, 't', ''], [12, 4, 't', ''], [12, 6, 'r', ''], [12, 8, 'r', ''], [12, 10, 't', ''], [13, 2, 't', ''], [13, 4, 't', ''], [13, 6, 't', ''], [13, 8, 't', ''], [13, 10, 'l', ''], [13, 12, 'r', ''], [14, 2, 't', ''], [14, 4, 't', ''], [14, 6, 't', ''], [14, 8, 't', ''], [14, 12, 't', '']],
		box_col: 15,
		ball_start: 5
	},
	{
		goal : 2,
		permitted : 0,
		boxes : [[0, 1, 't', ''], [0, 6, 'r', ''], [1, 1, 't', ''], [1, 4, 'r', ''], [1, 5, 'l', ''], [1, 7, 'l', ''], [1, 8, 'r', ''], [2, 1, 't', ''], [2, 3, 'r', ''], [2, 6, 'r', ''], [3, 1, 't', ''], [3, 2, 'r', ''], [3, 5, 'r', ''], [3, 7, 'l', ''], [3, 8, 'l', ''], [4, 1, 't', ''], [4, 4, 'r', ''], [5, 3, 'r', ''], [6, 1, 't', ''], [6, 2, 'l', ''], [7, 1, 't', ''], [7, 6, 'r', ''], [8, 1, 't', ''], [8, 4, 'r', ''], [8, 5, 'l', ''], [8, 7, 'l', ''], [8, 8, 'r', ''], [9, 1, 't', ''], [9, 3, 'r', ''], [9, 6, 'r', ''], [10, 1, 't', ''], [10, 2, 'r', ''], [10, 5, 'r', ''], [10, 7, 'l', ''], [10, 8, 'l', ''], [11, 1, 't', ''], [11, 4, 'r', ''], [12, 3, 'r', ''], [13, 1, 't', ''], [13, 2, 'l', ''], [14, 1, 't', '']],
		box_col: 15,
		ball_start: 5,
		wormhole_pairs: [{wh1: { x: 2.5, y: 11 }, wh2: { x: 9.5, y: 11 }, c: "#ffc4fd"}]
	},
	{
		goal : 13,
		permitted : 5,
		boxes : [[0, 1, 't', ''], [0, 5, 'r', ''], [0, 10, 'r', ''], [1, 1, 't', ''], [1, 4, 'b', ''], [1, 9, 't', ''], [2, 1, 't', ''], [2, 3, 'r', ''], [2, 9, 't', ''], [2, 13, 'r', ''], [3, 1, 't', ''], [3, 2, 'r', ''], [3, 7, 'br', ''], [3, 12, 'r', ''], [4, 1, 'tr', ''], [4, 6, 'r', ''], [4, 11, 'r', ''], [5, 1, 't', ''], [5, 5, 'r', ''], [5, 10, 'r', ''], [6, 1, 't', ''], [6, 2, 'r', ''], [6, 4, 'r', ''], [6, 9, 'b', ''], [7, 3, 'b', ''], [7, 8, 'r', ''], [8, 1, 't', ''], [8, 2, 'r', ''], [8, 7, 'r', ''], [8, 13, 'r', ''], [9, 1, 'tr', ''], [9, 6, 'r', ''], [9, 12, 'r', ''], [10, 1, 't', ''], [10, 5, 'r', ''], [10, 11, 'r', ''], [11, 1, 't', ''], [11, 4, 'r', ''], [11, 10, 'b', ''], [12, 1, 't', ''], [12, 3, 'r', ''], [12, 9, 'r', ''], [13, 1, 't', ''], [13, 2, 'r', ''], [13, 8, 'r', ''], [14, 1, 'tr', ''], [14, 7, 'r', '']],
		box_col: 15,
		ball_start: 7,
		wormhole_pairs: [{wh1: { x: 1.5, y: 3.5 }, wh2: { x: 9, y: 5 }, c: "#ffc4fd"}, {wh1: { x: 4.5, y: 4.5 }, wh2: { x: 13, y: 7 }, c: "#c4ffe5"}, {wh1: { x: 2, y: 8 }, wh2: { x: 8, y: 12 }, c: "#ffefa3"}]
	},
	{
		goal: 12,
		permitted: 4,
		boxes: [[0, 1, 'bl', ''], [1, 2, 'b', ''], [2, 3, 'b', ''], [3, 4, 't', ''], [4, 1, 'l', ''], [4, 4, 'l', ''], [5, 2, 'l', ''], [5, 5, 'l', ''], [5, 13, 'b', ''], [6, 3, 't', ''], [6, 6, 't', ''], [6, 11, 'r', ''], [6, 12, 'l', ''], [7, 3, 'l', ''], [7, 6, 't', ''], [7, 9, 'r', ''], [8, 4, 't', ''], [8, 8, 't', ''], [9, 4, 't', ''], [9, 7, 'r', ''], [10, 4, 't', ''], [10, 6, 'r', ''], [11, 6, 't', ''], [12, 3, 't', ''], [12, 4, 'r', ''], [12, 6, 'l', ''], [13, 2, 'b', ''], [13, 5, 'r', ''], [13, 7, 'l', ''], [14, 1, 'br', ''], [14, 8, 'l', '']],
		box_col: 15,
		ball_start: 9,
		wormhole_pairs: [{wh1: { x: 9.5, y: 2.5 }, wh2: { x: 1.5, y: 11.5 }, c: "#ffc4fd"}]
	},
	{
		hastobehere:true
	}
]